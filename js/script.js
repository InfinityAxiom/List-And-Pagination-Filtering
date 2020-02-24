/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const studentList = document.getElementsByClassName('student-item')
const numPerPage = 10
let currentPageNumber = 1;

const showPage = (list, page) => {
  startIndex = page * numPerPage - numPerPage
  endIndex = page * numPerPage
  //loops over everything
  //want to pull the 10 that are on the "selected" page
  //figure out how to call page / list correctly
  for (i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      //make item visible on the page
      studentList[i].style.display = 'block'
    } else {
      studentList[i].style.display = 'none'
    }
  }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = list => {
  //determine the number of pages
  const pageNumbers = Math.ceil(studentList.length / numPerPage);
  //create new elements to add them to the DOM

  
  //create buttons based on list size?
  }

