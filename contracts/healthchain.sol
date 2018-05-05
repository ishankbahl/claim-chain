pragma solidity ^0.4.0;

contract healthchain{

    address public _owner;


    function healthchain() public {
        _owner = msg.sender;
    }

    mapping(address => bool) insurers;
    mapping(address => bool) hospitals;
    mapping(address => bool) governing_bodies;
    mapping(address => bool) burialHomes;


    modifier onlyOwner {
        require(msg.sender == _owner);
        _;
    }

    modifier onlyInsurer {
        require(insurers[msg.sender]);
        _;
    }

    modifier onlyHospitals {
        require(hospitals[msg.sender]);
        _;
    }

    modifier onlyGovernment {
        require(governing_bodies[msg.sender]);
        _;
    }

      modifier onlyBurialHomes {
        require(burialHomes[msg.sender]);
        _;
    }

    struct ICustomer{
        string name;
        string age;
        address nominee;
        string policy;
        string policyStatus;
        string customerStatus;
    }

    struct Death{
        string deceasedName;
        string timeOfDeath;
        string placeOfDeath;
        string causeOfDeath;
        bool isDead;
    }

    struct Burial{
        string hash;
        bool isBuried;
    }

    struct DeathCertificate{
        string hash;
        bool isCertificateIssued;
    }

    mapping(address => ICustomer) customers;
    mapping(address => Death) deaths;
    mapping(address => Burial) burials;
    mapping(address => DeathCertificate) certificates;
    address[] customersList;
    address[] deceasedList;


    function addInsurers(address insurerAddress) onlyOwner public {
        insurers[insurerAddress] = true;
    }


    function addHospitals(address hospitalAddress) onlyOwner public {
        hospitals[hospitalAddress] = true;
    }

    function addGoverning(address governingAddress) onlyOwner public {
        governing_bodies[governingAddress] = true;
    }

    function addBurial(address burialAddress) onlyOwner public {
        burialHomes[burialAddress] = true;
    }

    function addCustomer(string name, string age, address customerAddress, string policyTaken, address nomineeAddress) onlyInsurer public {
        customers[customerAddress] = ICustomer(name, age, nomineeAddress, policyTaken, "taken", "alive");
        customersList.push(customerAddress);
    }


    function reportDeath(string name, string time, string place, string cause, address customerAddress) onlyHospitals public {
        deaths[customerAddress] = Death(name,time, place, cause, true);
        deceasedList.push(customerAddress);
        customers[customerAddress].customerStatus = 'dead';
        customers[customerAddress].policyStatus = 'up for claim';
    }

    function requestClaim(address customerAddress) public {
        if(deaths[customerAddress].isDead && msg.sender == customers[customerAddress].nominee && certificates[customerAddress].isCertificateIssued && burials[customerAddress].isBuried){
            customers[customerAddress].policyStatus = 'claimed successfully';
        } else {
                customers[customerAddress].policyStatus = 'claim denied';
        }
    }

    function addBurialPermit(address customer, string burialHash) onlyBurialHomes public {
        burials[customer] = Burial(burialHash, true);
        // customers[customer].status =
    }

    function issueDeathCertificate(address customer, string certificateHash) onlyGovernment public {
        certificates[customer] = DeathCertificate(certificateHash, true);
    }

    function getCustomerDetails(address customerAddress) constant public returns(string, string, address, string, string, string) {
        return (customers[customerAddress].name, customers[customerAddress].age, customers[customerAddress].nominee, customers[customerAddress].policy, customers[customerAddress].policyStatus, customers[customerAddress].customerStatus);
    }

    function getDeathDetails(address customerAddress) constant public returns(string, string, string, string, bool){
        return (deaths[customerAddress].deceasedName, deaths[customerAddress].timeOfDeath, deaths[customerAddress].placeOfDeath, deaths[customerAddress].causeOfDeath, deaths[customerAddress].isDead);
    }

    function getOwner() constant returns(address) {
        return _owner;
    }

}