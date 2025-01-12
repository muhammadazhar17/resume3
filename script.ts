const form = document.getElementById("inputfield") as HTMLFormElement | null;
const output_container = document.getElementById("output") as HTMLDivElement | null;
const main = document.getElementById("resume-builder") as HTMLDivElement | null;

if (form) {
    form.addEventListener('submit', function (event: Event) {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement | null)?.value || '';
        const occupation = (document.getElementById('occupation') as HTMLInputElement | null)?.value || '';
        const email = (document.getElementById('email') as HTMLInputElement | null)?.value || '';
        const phone = (document.getElementById('phone') as HTMLInputElement | null)?.value || '';
        const summery = (document.getElementById('summery') as HTMLInputElement | null)?.value || '';
        const education = (document.getElementById('education') as HTMLInputElement | null)?.value || '';
        const institute = (document.getElementById('institute') as HTMLInputElement | null)?.value || '';
        const eduCompleteYear = (document.getElementById('edu-complete-year') as HTMLInputElement | null)?.value || '';
        const experience = (document.getElementById('experience') as HTMLInputElement | null)?.value || '';
        const company = (document.getElementById('company') as HTMLInputElement | null)?.value || '';
        const role = (document.getElementById('role') as HTMLInputElement | null)?.value || '';
        const from = (document.getElementById('from') as HTMLInputElement | null)?.value || '';
        const to = (document.getElementById('to') as HTMLInputElement | null)?.value || '';
        const skills = (document.getElementById('skills') as HTMLInputElement | null)?.value || '';
        const interest = (document.getElementById('interest') as HTMLInputElement | null)?.value || '';

        if (output_container && main) {
            main.style.display = 'none';
            output_container.innerHTML = `
                <div class="resume-cont">
                    <div class="center">
                        <div class="main">
                            <div class="resume-head">
                                <div class="name">${name}</div>
                                <div class="occupation">${occupation}</div>
                            </div>
                        </div>
                        <div class="resume-main">
                            <div class="side1">
                                <div class="summery">
                                    <h2>SUMMERY</h2>
                                    <p>${summery}</p>
                                </div>
                                <div class="experience">
                                    <h2>Experience</h2>
                                    <div class="duration">${from} to ${to}</div>
                                    <div class="jobrole">${role}</div>
                                    <div class="company">${company}</div>
                                    <div class="exp-info">${experience}</div>
                                </div>
                                <div class="interest">
                                    <h2>Interest</h2>
                                    <p>${interest}</p>
                                </div>
                            </div>
                            <div class="side2">
                                <div class="contact">
                                    <h2>Contact</h2>
                                    <div class="contact-info"> 
                                        <div class="phone">${phone}</div>
                                        <div class="email">${email}</div>
                                    </div> 
                                </div>
                                <div class="education">
                                    <h2>Education</h2>
                                    <div class="higher-education">${education}</div>
                                    <div class="institute">${institute}</div>
                                    <div class="complition">${eduCompleteYear}</div>
                                </div>
                                <div class="skills">
                                    <h2>Skills</h2>
                                    <p>${skills}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    });
} else {
    console.error("Form element with id 'inputfield' not found.");
}



// const form = document.getElementById("inputfield") as HTMLFormElement;
// const output_container = document.getElementById("output") as HTMLDivElement;
// const main = document.getElementById("resume-builder") as HTMLDivElement;
// const editbtn = document.getElementById("edit-btn") as HTMLDivElement;
// const printbtn = document.getElementById("print-btn") as HTMLDivElement;

// form.addEventListener('submit', function (event: Event) {
//     event.preventDefault()

//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const occupation = (document.getElementById('occupation') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const phone = (document.getElementById('phone') as HTMLInputElement).value;
//     const summery = (document.getElementById('summery') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLInputElement).value;
//     const institute = (document.getElementById('institute') as HTMLInputElement).value;
//     const eduCompleteYear = (document.getElementById('edu-complete-year') as HTMLInputElement).value;
//     const experience = (document.getElementById('experience') as HTMLInputElement).value;
//     const company = (document.getElementById('company') as HTMLInputElement).value;
//     const role = (document.getElementById('role') as HTMLInputElement).value;
//     const from = (document.getElementById('from') as HTMLInputElement).value;
//     const to = (document.getElementById('to') as HTMLInputElement).value;
//     const skills = (document.getElementById('skills') as HTMLInputElement).value;
//     const interest = (document.getElementById('interest') as HTMLInputElement).value;


//     if (output_container) {
//         main.style.display = 'none'
//         output_container.innerHTML = `

//           <div class="resume-cont">
//                 <div class="center">
//                     <div class="main">
//                         <div class="resume-head">
//                             <div class="name">${name}</div>
//                             <div class="occupation">${occupation}</div>
//                         </div>
            
            
//                     </div>
//                     <div class="resume-main">
//                         <div class="side1">
            
//                             <!-- summery -->
            
//                             <div class="summery">
//                                 <h2>SUMMERY</h2>
//                                 <p>${summery}</p>
//                             </div>
            
//                             <!-- experience  -->
            
//                             <div class="experience">
//                                 <h2>Experience</h2>
//                                 <div class="duration">${from}  to  ${to}</div>
//                                 <div class="jobrole">${role}</div>
//                                 <div class="company">${company}</div>
//                                 <div class="exp-info">${experience}</div>
//                             </div>
            
//                             <!-- interest  -->
            
//                             <div class="interest">
                            
//                                 <h2>Interest</h2>
//                                 <p>${interest}</p>
                            
//                             </div>
            
//                         </div>
//                         <div class="side2">
            
//                             <!-- contact  -->
            
//                         <div class="contact">

//                             <h2>Contact</h2>
//                           <div class="contact-info"> 

//                             <div class="phone">${phone}</div>
//                             <div class="email">${email}</div>
//                           </div> 
//                         </div>
            
//                             <!-- education  -->
            
//                         <div class="education">

//                             <h2>Education</h2>

//                             <div class="higher-education">${education}</div>
//                             <div class="institute">${institute}</div>
//                             <div class="complition">${eduCompleteYear}</div>
//                         </div>
            
//                         <!-- skills  -->
            
//                         <div class="skills">
                        
//                             <h2>Skills</h2>
//                             <p>${skills}</p>

//                         </div>
//                         </div>
//                     </div>
//                 </div>


               
//             </div>
//         `;
//     };


// });