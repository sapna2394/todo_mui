// import React, { Component } from "react";
// import "./App.css";
// import MUIDataTable from "mui-datatables";
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },

// }));

// export default function TimePickers() {
//   const classes = useStyles();
//   const columns = [
//     {
//      name: "name",
//      label: "Name",
//      options: {
//       filter: true,
//       sort: true,
//      }
//     },
//     {
//      name: "designation",
//      label: "designation",
//      options: {
//       filter: true,
//       sort: false,
//      }
//     },
    
//       {
//         name: "time",
//         label: "clock",
//         options: {
//          filter: true,
//          sort: false,
//         }
//        },
       
//    ];
   
//    const data = [
//     { name: "Joe James", designation: "Test Corp"},
//     { name: "John Walsh", company: "Test Corp"},
//     { name: "Bob Herm", company: "Test Corp"},
//     { name: "James Houston", company: "Test Corp" },
//    ];
   

//     const options = {
//       filterType: "checkbox",
//     };
    


//   return (
//     <form className={classes.container} noValidate>
//       <MUIDataTable
//           title={"MUI- TODO-LIST"}
//           data={data}
//           columns={columns}
//           options={options}
        
          
//           />
//           <input
//               id="time"
//               label="clock"
//               type="time"
//               defaultValue="07:30"
//               className={classes.Input}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               inputProps={{
//                 step: 30, // 5 min
//               }}
//               />
//       {/* <TextField
//         id="time"
//         label="clock"
//         type="time"
//         defaultValue="07:30"
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//         inputProps={{
//           step: 30, // 5 min
//         }}
//       /> */}
//     </form>
//   );
// }

// import * as React from 'react';
// import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomUpdatedDate,
// } from '@mui/x-data-grid-generator';

// export default function BasicEditingGrid() {
//   return (
//     <div style={{ height: 300, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         experimentalFeatures={{ newEditingApi: true }}
//       />
//     </div>
//   );
// }

// const columns: GridColumns = [
//   { field: 'name', headerName: 'Name', width: 180, editable: true },
//   { field: 'desination', headerName: 'Designation', editable: true },
//   {
//     field: 'dateCreated',
//     headerName: 'Date Created',
//     type: 'date',
//     width: 180,
//     editable: true,
//   },
//   {
//     field: 'lastLogin',
//     headerName: 'Last Login',
//     type: 'dateTime',
//     width: 220,
//     editable: true,
//   },
// ];

// const rows: GridRowsProp = [
//   {
//     id: 1,
//     name: randomTraderName(),
//     designation: "teacher",
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 2,
//     name: randomTraderName(),
//     age: 36,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 3,
//     name: randomTraderName(),
//     age: 19,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 4,
//     name: randomTraderName(),
//     age: 28,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 5,
//     name: randomTraderName(),
//     age: 23,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
// ];





// import {
//     FormGroup,
//     FormLabel,
//     FormControl,
//     ListItemText,
//     TextField,
//     Checkbox,
//     FormControlLabel,
//     Select,
//     InputLabel,
//     MenuItem
//   } from '@mui/material';
//   import React from 'react';
//   import MUIDataTable from "mui-datatables";
  
//   class Example extends React.Component {
//     state = {
//       ageFilterChecked: false
//     };
  
//     render() {
//       const columns = [
//         {
//           name: 'Name',
//           options: {
//             filter: true,
//             filterOptions: {
//               renderValue: v => v ? v.replace(/^(\w).* (.*)$/, '$1. $2') : ''
//             },
//             //display: 'excluded',
//             filterType: 'dropdown'
//           },
//         },
//         {
//           label: 'Modified Title Label',
//           name: 'Title',
//           options: {
//             filter: true,
//             customFilterListOptions: {
//               render: v => v.toLowerCase()
//             },
//           },
//         },
//         {
//           label: 'Location',
//           name: 'Location',
//           options: {
//             filter: true,
//             display: 'true',
//             filterType: 'custom',
//             customFilterListOptions: {
//               render: v => v.map(l => l.toUpperCase()),
//               update: (filterList, filterPos, index) => {
//                 console.log('update');
//                 console.log(filterList, filterPos, index);
//                 filterList[index].splice(filterPos, 1);
//                 return filterList;
//               }
//             },
//             filterOptions: {
//               logic: (location, filters, row) => {
//                 if (filters.length) return !filters.includes(location);
//                 return false;
//               },
//               display: (filterList, onChange, index, column) => {
//                 const optionValues = ['Minneapolis', 'New York', 'Seattle'];
//                 return (
//                   <FormControl>
//                     <InputLabel htmlFor='select-multiple-chip'>
//                       Location
//                     </InputLabel>
//                     <Select
//                       multiple
//                       value={filterList[index]}
//                       renderValue={selected => selected.join(', ')}
//                       onChange={event => {
//                         filterList[index] = event.target.value;
//                         onChange(filterList[index], index, column);
//                       }}
//                     >
//                       {optionValues.map(item => (
//                         <MenuItem key={item} value={item}>
//                           <Checkbox
//                             color='primary'
//                             checked={filterList[index].indexOf(item) > -1}
//                           />
//                           <ListItemText primary={item} />
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 );
//               }
//             }
//           }
//         },
//         {
//           name: 'Age',
//           options: {
//             filter: true,
//             filterType: 'custom',
  
//             // if the below value is set, these values will be used every time the table is rendered.
//             // it's best to let the table internally manage the filterList
//             //filterList: [25, 50],
            
//             customFilterListOptions: {
//               render: v => {
//                 if (v[0] && v[1] && this.state.ageFilterChecked) {
//                   return [`Min Age: ${v[0]}`, `Max Age: ${v[1]}`];
//                 } else if (v[0] && v[1] && !this.state.ageFilterChecked) {
//                   return `Min Age: ${v[0]}, Max Age: ${v[1]}`;
//                 } else if (v[0]) {
//                   return `Min Age: ${v[0]}`;
//                 } else if (v[1]) {
//                   return `Max Age: ${v[1]}`;
//                 }
//                 return [];
//               },
//               update: (filterList, filterPos, index) => {
//                 console.log('customFilterListOnDelete: ', filterList, filterPos, index);
  
//                 if (filterPos === 0) {
//                   filterList[index].splice(filterPos, 1, '');
//                 } else if (filterPos === 1) {
//                   filterList[index].splice(filterPos, 1);
//                 } else if (filterPos === -1) {
//                   filterList[index] = [];
//                 }
  
//                 return filterList;
//               },
//             },
//             filterOptions: {
//               names: [],
//               logic(age, filters) {
//                 if (filters[0] && filters[1]) {
//                   return age < filters[0] || age > filters[1];
//                 } else if (filters[0]) {
//                   return age < filters[0];
//                 } else if (filters[1]) {
//                   return age > filters[1];
//                 }
//                 return false;
//               },
//               display: (filterList, onChange, index, column) => (
//                 <div>
//                   <FormLabel>Age</FormLabel>
//                   <FormGroup row>
//                     <TextField
//                       label='min'
//                       value={filterList[index][0] || ''}
//                       onChange={event => {
//                         filterList[index][0] = event.target.value;
//                         onChange(filterList[index], index, column);
//                       }}
//                       style={{ width: '45%', marginRight: '5%' }}
//                     />
//                     <TextField
//                       label='max'
//                       value={filterList[index][1] || ''}
//                       onChange={event => {
//                         filterList[index][1] = event.target.value;
//                         onChange(filterList[index], index, column);
//                       }}
//                       style={{ width: '45%' }}
//                     />
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={this.state.ageFilterChecked}
//                           onChange={event => this.setState({ ageFilterChecked: event.target.checked })}
//                         />
//                       }
//                       label='Separate Values'
//                       style={{ marginLeft: '0px' }}
//                     />
//                   </FormGroup>
//                 </div>
//               ),
//             },
//             print: false,
//           },
//         },
//         {
//           name: 'Salary',
//           options: {
//             filter: true,
//             filterType: 'checkbox',
//             filterOptions: {
//               names: ['Lower wages', 'Average wages', 'Higher wages'],
//               logic(salary, filterVal) {
//                 salary = salary.replace(/[^\d]/g, '');
//                 const show =
//                   (filterVal.indexOf('Lower wages') >= 0 && salary < 100000) ||
//                   (filterVal.indexOf('Average wages') >= 0 && salary >= 100000 && salary < 200000) ||
//                   (filterVal.indexOf('Higher wages') >= 0 && salary >= 200000);
//                 return !show;
//               },
//             },
//             sort: false,
//           },
//         },
//       ];
  
//       const data = [
//         ['Gabby George', 'Business Analyst', 'Minneapolis', 30, '$100,000'],
//         ['Aiden Lloyd', 'Business Consultant', 'Dallas', 55, '$200,000'],
//         ['Jaden Collins', 'Attorney', 'Santa Ana', 27, '$500,000'],
//         ['Franky Rees', 'Business Analyst', 'St. Petersburg', 22, '$50,000'],
//         ['Aaren Rose', 'Business Consultant', 'Toledo', 28, '$75,000'],
//         ['Blake Duncan', 'Business Management Analyst', 'San Diego', 65, '$94,000'],
//         ['Frankie Parry', 'Agency Legal Counsel', 'Jacksonville', 71, '$210,000'],
//         ['Lane Wilson', 'Commercial Specialist', 'Omaha', 19, '$65,000'],
//         ['Robin Duncan', 'Business Analyst', 'Los Angeles', 20, '$77,000'],
//         ['Mel Brooks', 'Business Consultant', 'Oklahoma City', 37, '$135,000'],
//         ['Harper White', 'Attorney', 'Pittsburgh', 52, '$420,000'],
//         ['Kris Humphrey', 'Agency Legal Counsel', 'Laredo', 30, '$150,000'],
//         ['Frankie Long', 'Industrial Analyst', 'Austin', 31, '$170,000'],
//         ['Brynn Robbins', 'Business Analyst', 'Norfolk', 22, '$90,000'],
//         ['Justice Mann', 'Business Consultant', 'Chicago', 24, '$133,000'],
//         ['Addison Navarro', 'Business Management Analyst', 'New York', 50, '$295,000'],
//         ['Jesse Welch', 'Agency Legal Counsel', 'Seattle', 28, '$200,000'],
//         ['Eli Mejia', 'Commercial Specialist', 'Long Beach', 65, '$400,000'],
//         ['Gene Leblanc', 'Industrial Analyst', 'Hartford', 34, '$110,000'],
//         ['Danny Leon', 'Computer Scientist', 'Newark', 60, '$220,000'],
//         ['Lane Lee', 'Corporate Counselor', 'Cincinnati', 52, '$180,000'],
//         ['Jesse Hall', 'Business Analyst', 'Baltimore', 44, '$99,000'],
//         ['Danni Hudson', 'Agency Legal Counsel', 'Tampa', 37, '$90,000'],
//         ['Terry Macdonald', 'Commercial Specialist', 'Miami', 39, '$140,000'],
//         ['Justice Mccarthy', 'Attorney', 'Tucson', 26, '$330,000'],
//         ['Silver Carey', 'Computer Scientist', 'Memphis', 47, '$250,000'],
//         ['Franky Miles', 'Industrial Analyst', 'Buffalo', 49, '$190,000'],
//         ['Glen Nixon', 'Corporate Counselor', 'Arlington', 44, '$80,000'],
//         ['Gabby Strickland', 'Business Process Consultant', 'Scottsdale', 26, '$45,000'],
//         ['Mason Ray', 'Computer Scientist', 'San Francisco', 39, '$142,000'],
//       ];
  
//       const options = {
//         filter: true,
//         filterType: 'multiselect',
//         responsive: 'standard',
//         setFilterChipProps: (colIndex, colName, data) => {
//           //console.log(colIndex, colName, data);
//           return {
//             color: 'primary',
//             variant: 'outlined',
//             className: 'testClass123',
//           };
//         }
//       };
      
//       return (
//         <MUIDataTable title={'ACME Employee list - customizeFilter'} data={data} columns={columns} options={options} />
//       );
//     }
//   }
  
//   export default Example;


// import React from "react";
// import ReactDOM from "react-dom";
// import MUIDataTable from "mui-datatables";

// class Example extends React.Component {
//   render() {
//     const columns = ["Name", "SurveyScore", "Date"];

//     const data = [
//       ["Gabby George", 3, "2018-07-06T23:58:59"],
//       ["Aiden Lloyd", 10, "2018-07-06T23:58:53.000Z"],
//       ["Jaden Collins", 3, "2018-07-06T23:55:51.000Z"],
//       ["Franky Rees", 3, "2018-07-06T22:47:56.000Z"],
//       ["Aaren Rose", 8, "2018-07-06T21:59:20.000Z"]
//     ];

//     const options = {
//       filter: true,
//       filterType: "dropdown",
//       responsive: "stacked",
//       customSort: (data, colIndex, order) => {
//         return data.sort((a, b) => {
//           return (
//             (a.data[colIndex].length < b.data[colIndex].length ? -1 : 1) *
//             (order === "desc" ? 1 : -1)
//           );
//         });
//       }
//     };

//     return (
//       <MUIDataTable
//         title={"Survey Scores"}
//         data={data}
//         columns={columns}
//         options={options}
//       />
//     );
//   }
// }

// ReactDOM.render(<Example />, document.getElementById("root"));
// export default Example;

// import React from "react";
// import { FormGroup, FormLabel, TextField } from "@material-ui/core";
// import ReactDOM from "react-dom";
// import MUIDataTable from "mui-datatables";
// import DateFnsUtils from "@date-io/date-fns"; // choose your lib
// import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

// class App extends React.Component {
//   state = {
//     fromDate: new Date(),
//     toDate: new Date()
//   };

//   handleFromDateChange = date => this.setState({ fromDate: date });
//   handleToDateChange = date => this.setState({ toDate: date });

//   render() {
//     const { fromDate, toDate } = this.state;
//     const columns = [
//       {
//         name: "Name",
//         options: {
//           filter: true,
//           customFilterListRender: v => `What up! : ${v}`,
//           display: "excluded"
//         }
//       },
//       "Title",
//       {
//         name: "Location",
//         options: {
//           print: false,
//           filter: false,
//           sort: false
//         }
//       },
      
//       {
//         name: "Date",
//         options: {
//           filter: true,
//           filterType: "custom",
//           sort: false,
//           filterOptions: {
//             names: [],
//             logic(date, filters) {
//               if (filters[0] && filters[1]) {
//                 return date < filters[0] || date > filters[1];
//               } else if (filters[0]) {
//                 return date < filters[0];
//               } else if (filters[1]) {
//                 return date > filters[1];
//               }
//               return false;
//             },
//             display: (filterList, onChange, index, column) => (
//               <div>
//                 <FormLabel>Date</FormLabel>
//                 <FormGroup row>
//                   <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                     <DatePicker
//                       label="From"
//                       value={fromDate || new Date()}
//                       onChange={date => {
//                         console.log(filterList);
//                         this.handleFromDateChange(date);
//                         filterList[index][0] = date.toString();
//                         onChange(filterList[index], index, column);
//                       }}
//                     />
//                     <DatePicker
//                       label="To"
//                       value={toDate || new Date()}
//                       onChange={date => {
//                         filterList[index][1] = date.toString();
//                         this.handleToDateChange(date);
//                         onChange(filterList[index], index, column);
//                       }}
//                     />
//                   </MuiPickersUtilsProvider>
//                 </FormGroup>
//               </div>
//             )
//           },
//           print: false
//         }
//       },
      
//     ];

//     const data = [
//       [
//         "Gabby George",
//         "Business Analyst",
//         "Toronto",
//         30,
//         "2013-07-05",
//         "$100,000"
//       ],
//       [
//         "Aiden Lloyd",
//         "Business Consultant",
//         "Montreal",
//         55,
//         "2014-10-22",
//         "$200,000"
//       ],
//       ["Jaden Collins", "Attorney", "Santa  Ana", 27, "2017-11-01", "$500,000"],
//       [
//         "Franky Rees",
//         "Business Analyst",
//         "St. Petersburg",
//         22,
//         "2015-08-02",
//         "$50,000"
//       ],
//       [
//         "Aaren Rose",
//         "Business Consultant",
//         "Toledo",
//         28,
//         "2017-09-02",
//         "$75,000"
//       ],
//       [
//         "Blake Duncan",
//         "Business Management Analyst",
//         "San Diego",
//         65,
//         "2019-09-16",
//         "$94,000"
//       ],
//       [
//         "Frankie Parry",
//         "Agency Legal Counsel",
//         "Jacksonville",
//         71,
//         "2015-08-02",
//         "$210,000"
//       ],
//       [
//         "Lane Wilson",
//         "Commercial Specialist",
//         "Omaha",
//         19,
//         "2015-08-02",
//         "$65,000"
//       ],
//       [
//         "Robin Duncan",
//         "Business Analyst",
//         "Los Angeles",
//         20,
//         "2015-08-02",
//         "$77,000"
//       ],
//       [
//         "Mel Brooks",
//         "Business Consultant",
//         "Oklahoma City",
//         37,
//         "2015-08-02",
//         "$135,000"
//       ],
//       ["Harper White", "Attorney", "Pittsburgh", 52, "2015-08-02", "$420,000"],
//       [
//         "Kris Humphrey",
//         "Agency Legal Counsel",
//         "Laredo",
//         30,
//         "2015-08-02",
//         "$150,000"
//       ],
//       [
//         "Frankie Long",
//         "Industrial Analyst",
//         "Austin",
//         31,
//         "2015-08-02",
//         "$170,000"
//       ],
//       [
//         "Brynn Robbins",
//         "Business Analyst",
//         "Norfolk",
//         22,
//         "2015-08-02",
//         "$90,000"
//       ],
//       [
//         "Justice Mann",
//         "Business Consultant",
//         "Chicago",
//         24,
//         "2015-08-02",
//         "$133,000"
//       ],
//       [
//         "Addison Navarro",
//         "Business Management Analyst",
//         "New York",
//         50,
//         "2015-08-02",
//         "$295,000"
//       ],
//       [
//         "Jesse Welch",
//         "Agency Legal Counsel",
//         "Seattle",
//         28,
//         "2015-08-02",
//         "$200,000"
//       ],
//       [
//         "Eli Mejia",
//         "Commercial Specialist",
//         "Long Beach",
//         65,
//         "2015-08-02",
//         "$400,000"
//       ],
//       [
//         "Gene Leblanc",
//         "Industrial Analyst",
//         "Hartford",
//         34,
//         "2015-08-02",
//         "$110,000"
//       ],
//       [
//         "Danny Leon",
//         "Computer Scientist",
//         "Newark",
//         60,
//         "2015-08-02",
//         "$220,000"
//       ],
//       [
//         "Lane Lee",
//         "Corporate Counselor",
//         "Cincinnati",
//         52,
//         "2015-08-02",
//         "$180,000"
//       ],
//       [
//         "Jesse Hall",
//         "Business Analyst",
//         "Baltimore",
//         44,
//         "2015-08-02",
//         "$99,000"
//       ],
//       [
//         "Danni Hudson",
//         "Agency Legal Counsel",
//         "Tampa",
//         37,
//         "2015-08-02",
//         "$90,000"
//       ],
//       [
//         "Terry Macdonald",
//         "Commercial Specialist",
//         "Miami",
//         39,
//         "2015-08-02",
//         "$140,000"
//       ],
//       ["Justice Mccarthy", "Attorney", "Tucson", 26, "2015-08-02", "$330,000"],
//       [
//         "Silver Carey",
//         "Computer Scientist",
//         "Memphis",
//         47,
//         "2015-08-02",
//         "$250,000"
//       ],
//       [
//         "Franky Miles",
//         "Industrial Analyst",
//         "Buffalo",
//         49,
//         "2015-08-02",
//         "$190,000"
//       ],
//       [
//         "Glen Nixon",
//         "Corporate Counselor",
//         "Arlington",
//         44,
//         "2015-08-02",
//         "$80,000"
//       ],
//       [
//         "Gabby Strickland",
//         "Business Process Consultant",
//         "Scottsdale",
//         26,
//         "2015-08-02",
//         "$45,000"
//       ],
//       [
//         "Mason Ray",
//         "Computer Scientist",
//         "San Francisco",
//         39,
//         "2015-08-02",
//         "$142,000"
//       ]
//     ];

//     const options = {
//       filterType: "dropdown",
//       responsive: "scroll"
//     };

//     return (
//       <MUIDataTable
//         title={"BGRS Employee list"}
//         data={data}
//         columns={columns}
//         options={options}
//       />
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));


import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

class App extends React.Component {
  render() {
    const dateColumn = {
      name: "Date",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <form noValidate>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true
              }}
            />
          </form>
        )
      }
    };
    const columns = ["Name", "Description",dateColumn];

    const data = [
      [
        "George",
        "Business Analyst",
        "18/07/1989"
      ],
      [
        "Aiden",
        "Business Consultant",
        "18/07/1989"
      ],
      ["Jaden Collins", "Attorney","18/07/1989"],
      [
        "Franky",
        "Business Analyst",
        "18/07/1989"
      ],
      [
        "Rose",
        "Business Consultant",
        "18/07/1989"
      ],
      [
        "Blake",
        "Business Management Analyst",
        "18/07/1989"
      ],
      [
        "Frankie",
        "Agency Legal Counsel",
        "18/07/1989"
      ],
      [
        "Wilson",
        "Commercial Specialist",
        "18/07/1989"
      ],
      [
        "Robin",
        "Business Analyst",
        "18/07/1989"
      ],
      [
        "Mel Brooks",
        "Business Consultant",
        "18/07/1989"
      ],
      ["Harper White", "Attorney", "18/07/1989"],
      [
        "Kris",
        "Agency Legal Counsel",
        "18/07/1989"
      ],
      [
        "Frankie Long",
        "Industrial Analyst",
        "18/07/1989"
      ],
      [
        "Brynn Robbins",
        "Business Analyst",
        "18/07/1989"
      ],
      [
        "Justice Mann",
        "Business Consultant",
        "18/07/1989"
      ],
      [
        "Addison Navarro",
        "Business Management Analyst",
      ],
      ["Jesse Welch", "Agency Legal Counsel"],
      ["Eli Mejia", "Commercial Specialist"],
      ["Gene Leblanc", "Industrial Analyst"],
      ["Danny Leon", "Computer Scientist"],
      ["Lane Lee", "Corporate Counselor"],
      ["Jesse Hall", "Business Analyst"],
      ["Danni Hudson", "Agency Legal Counsel"],
      ["Terry Macdonald", "Commercial Specialist"],
      ["Justice Mccarthy", "Attorney"],
      ["Silver Carey", "Computer Scientist"],
      ["Franky Miles", "Industrial Analyst"],
      ["Glen Nixon", "Corporate Counselor"],
      [
        "Gabby Strickland",
        "Business Process Consultant",
      ],
      ["Mason Ray", "Computer Scientist"]
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

    return (
      <MUIDataTable
        title={"TODO list"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;


