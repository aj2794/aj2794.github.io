//$("#main").append(["Aditya"]);
//var awesomethoughts = "I am Aditya and i am awesome";
//console.log(awesomethoughts);
//var fun = awesomethoughts.replace("awesome","fun");
//$('#main').append([fun]);
var skills=["Optimistic","Patient","Honesty","Knowledge Seeker"];
var bio = {
    "name": "Aditya Jain",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+919582114161",
        "email": "adityajain2794@gmail.com",
        "github": "aj2794",
        "location": "Noida,India"
    },
    "welcomeMessage": "I never loose. Either I win or I learn",
    "skills": skills,
    "biopic": "images/me.jpg"
};

var education = {
    "schools": [
        {
            "name": "Jaypee Institute of Information Technology",
            "location": "Noida, India",
            "degree": "Bachelors",
            "majors": ["ECE"],
            "dates": "2017",
            "url": "http://www.jiit.ac.in"
        }
    ],
    " onlineCourses": [
        {
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/nanodegree"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Film Electronics",
            "title": "Intern",
            "dates": "1 Jan 2016-20 Jan 2016",
            "location": "Meerut",
            "description": "As an intern, I have to undersatnd the whole process of making Thin film Hybrid Microcircuit. "
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Wireless Noticeboard",
            "dates": "2015",
            "description": "Dispaly any notice on Lcd using arduino sent to GSM module through the text message by mobile",
            "images": ["images/images2.jpg"]
        }
    ]
};

bio.display = function () {
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").prepend(formattedName);
    var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedBiopic);
    var formattedWelcomemessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedWelcomemessage);

    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#footerContacts").append(formattedLocation);
};

//unspaghettify(displayWork())

education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        //$(".education-entry:last").append(formattedName);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        $(".education-entry:last").append(formattedName +"  "+formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedMajors);

        //var formattedSchoolUrl = HTMLschoolURL.replace("%data%",education.schools[school].url);
        //$("education-entry:last").append(formattedSchoolUrl);
    };
    $("#education").append(HTMLonlineClasses);
    for(course in education. onlineCourses) {
        $('#education').append(HTMLonlineStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%",education. onlineCourses[course].title);
        $(".online-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education. onlineCourses[course].school);
        $(".online-entry:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%",education. onlineCourses[course].dates);
        $(".online-entry:last").append(formattedDates);
        var formattedUrl = HTMLonlineURL.replace("%data%",education. onlineCourses[course].url);
        $(".online-entry:last").append(formattedUrl);
    };
};

work.display = function() {
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    };
};

projects.display = function() {
    for(item in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[item].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates= HTMLprojectDates.replace("%data%",projects.projects[item].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[item].description);
        $(".project-entry:last").append(formattedDescription);
        for(image in projects.projects[item].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[item].images[image]);
                $(".project-entry:last").append(formattedImage);
            };
    };
};

$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

function inName(name) {
    name=name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1];
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);



