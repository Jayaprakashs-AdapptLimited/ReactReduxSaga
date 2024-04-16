import logo from './logo.svg';
import './App.css';
import {Counter} from './component/Counter';
import Employee from './component/Employee';

function App() {

  const employeeInfo = [{firstName: 'Will', lastName: 'Jack', age: 27},
  {firstName: 'Tim', lastName: 'David', age: 32},
  {firstName: 'Trave', lastName: 'Head', age: 35},
  {firstName: 'Umesh', lastName: 'Yadav', age: 18}
];

console.log(employeeInfo);
  return (
    <div className="App">
      <header className="App-header">
          {/* <Counter /> */}
          {/* //////////////////Employe Details 
          <h1> Company Directory</h1>
          {employeeInfo.map(employee => {
            // const {firstName, lastName, age} = employee;

            return (
              // <Employee key={firstName} firstName={firstName} lastName={lastName} age={age} />
              <Employee {...employee} />
            )
          }
            )}
        */ }
          {/* <Employee firstName="tim" /> 
          <Employee firstName="david" /> 
          <Employee firstName="jack" />  */}
      </header>
    </div>
  );
}

export default App;
