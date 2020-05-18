function EmployeeInformation(Name,Age,Skill,Experience,Salary,Address,Call,Email) {
    this.Name = Name;
    this.Age = Age;
    this.Skill = Skill;
    this.Experience = Experience;
    this.Salary = Salary;
    this.Address = Address;
    this. Call = Call;
    this.Email = Email;

    this.display = function () {
        console.log(this.Name);
        console.log(this.Age);
        console.log(this.Skill);
        console.log(this.Experience);
        console.log(this.Salary);
        console.log(this.Address);
        console.log(this.Call);
        console.log(this.Email);
    }
}
 
var EmployeeInformation1 = new EmployeeInformation ("SH Masum",22,"Web Design and Developer","10 years","2 lakh Taka","Dhaka Mohakhali Bangladesh","+8801407892308","info@SH.Masum.com");

var EmployeeInformation2 = new EmployeeInformation ("Mr Himu",22,"Web Developer","4 years","50000 Taka","Dhaka Motijil Bangladesh","+8801807578934","info@Mr.Himu.com",);

var EmployeeInformation3 = new EmployeeInformation ("Sojib Khan",20,"Web Design and Developer","2 years","1 lakh Taka","Bangladesh","+8801608427341","info@Sojib.Khan.com",);

var EmployeeInformation4 = new EmployeeInformation ("Maisara Islam",31,"Web Design and Developer","15 years","4 lakh Taka","Dhaka Bangladesh","+8801307982312","info@Maisara.Islam.com");


EmployeeInformation1.display();
// EmployeeInformation2.display();
// EmployeeInformation3.display();
// EmployeeInformation4.display();
