import React from'react'
import Job from './Job'

function Joblist() {

const jobs = [

{
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-GFGub41swy3BsxlgUZbXFOuGiyimidezQ&usqp=CAU',
    post:'Director Of Engineering',
    company:'Britewel',
    skills: [ {topic:'Javascript'} ]
},

{
    image:'https://www.companylawclub.co.uk/images/company-law-basics.jpg',
    post:'Tech Recruiter (Europe)',
    company:'NA-KD',
    skills: [ {topic:'Digital Marketing'},{topic:'Woocommerce'},{topic:'Partner Market'} ]
},

{
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYI75uwOjle3TL0hdeu_4HNpCnWu-Hqj_UzQ&usqp=CAU',
    post:'Technical Support Engineer (Python)',
    company:'Scrapinhub',
    skills: [ {topic:'Python'},{topic:'Javascript'},{topic:'HTML'}, ]
},

{
    image:'https://bsmedia.business-standard.com/_media/bs/img/article/2019-06/05/full/1559674671-2023.jpg',
    post:'Director Of Engineering (AWS)',
    company:'Virtasant',
    skills: [ {topic:'Cloud'},{topic:'AWS'},{topic:'Cloud Management'} ]
},

{
    image:'https://bel-india.com/wp-content/uploads/2020/03/stage-company.jpg',
    post:'Frontend Developer',
    company:'Albert Baurer',
    skills: [ {topic:'Javascript'},{topic:'CSS'},{topic:'HTML'} ]
},


{
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-GFGub41swy3BsxlgUZbXFOuGiyimidezQ&usqp=CAU',
    post:'Director Of Engineering',
    company:'Britewel',
    skills: [ {topic:'Javascript'} ]
},

{
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYI75uwOjle3TL0hdeu_4HNpCnWu-Hqj_UzQ&usqp=CAU',
    post:'Technical Support Engineer (Python)',
    company:'Scrapinhub',
    skills: [ {topic:'Python'},{topic:'Javascript'},{topic:'HTML'}, ]
},

{
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-GFGub41swy3BsxlgUZbXFOuGiyimidezQ&usqp=CAU',
    post:'Frontend Developer',
    company:'Albert Baurer',
    skills: [ {topic:'Javascript'},{topic:'CSS'},{topic:'HTML'} ]
}

]
return(<Job key={jobs.id} jobs={jobs} />)

}

export default Joblist