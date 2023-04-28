class Student{
    constructor(firstName, lastName, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
    }
    description(){
        return`${this.firstName} ${this.lastNamer} is in ${this.grade}`
    }
}

class School{
    constructor(schoolName){
        this.schoolName = schoolName;
        this.Students = [];
    }
    
    addStudent(student){
        if (student instanceof Student){
            this.students.push(student)
        }else{
            throw new Error(`you can only add instance of Student `)
        }

    }
      description(){
         return `${this.school} has ${this.students.length} attending`
      }
}

class Menu{
    constructor(){
        this.schools = []
        this.selectedSchool = null
    }
    start(){
        let selection = this.showMainMenuOptions();
            while(selection != 0){
                switch (selection){
                    case '1':
                        this.createSchool()
                        break;
                     case '2':
                         this.viewSchool()
                        break;
                      case '3':
                          this.deleteSchool()
                          break;
                      case '4':
                          this.displaySchool()
                           break;
                        default:
                            selection =0;
                }
                  selection = this.showMainMenuOptions()
            }
            alert('Goodbye');
            }
               showMainMenuOptions(){
                   return prompt(`
                        0) exit
                        1) Create a school
                        2) View a school
                        3) delete a school
                        4) display a school
                   `);
               }
                  
                 showSchoolMenuOptions(schoolInfo){
                     return prompt(`
                         0) Back
                         1) create student
                         2) delete Student
                         ============
                         ${schoolInfo}
                     `)
                 }


                  displaySchool(){
                    let schoolString = ' '
                    for(let i = 0; i < this.schools.length; i++){
                    schoolString += i + ") " + this.schools[i].names + '\n';
                    }
                    alert(schoolString);
                  }
                  createSchool(){
                    let name = prompt('Enter name of new shcool: ');
                    this.schools.push(new School(name))
                  }
                  viewSchool(){
                    
                    let index = prompt('What school so you wish to view:')
                    if(index > -1 && index < this.schools.length)
                    this.selectedSchool = this.schools[index];
                    let description = 'school name: ' + this.selectedSchool.name + '\n'
                    
                    for(let i = 0; i < this.selectedSchool.students.length; i++){
                        description += i + ') ' + this.selectedSchool.students.name[i] + " = " +
                        this.selectedSchool.students.grade + "\n";
                    }
                    
                    
                    let selection = this.showMainMenuOptions(description);
                      switch (selection){
                          case '1':
                           this.createStudent()
                          break;
                          case '2':
                          this.deleteStudent()

                      }
                  }
            }
        let menu = new Menu()
         menu.start()
    

