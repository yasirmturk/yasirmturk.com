var skills = [
  { text: "Swift", size: 99 },
  { text: "Objective-C", size: 95 },
  { text: "Xcode", size: 91 },
  { text: "iOS", size: 89 },
  { text: "CocoaPods", size: 83 },
  { text: "git", size: 81 },
  { text: "Storyboards", size: 79 },
  { text: "JSON", size: 75 },
  { text: "XML", size: 71 },
  { text: "MVVM-C", size: 69 },
  { text: "API", size: 67 },
  { text: "fastlane", size: 63 },
  { text: "Adventure", size: 57 },
  { text: "REST", size: 51 },
  { text: "Android", size: 47 },
  { text: "HTML", size: 45 },
  { text: "TFS", size: 41 },
  { text: "Jira", size: 39 },
  { text: ".NET", size: 37 },
  { text: "C#", size: 37 },
  { text: "Java", size: 35 },
  { text: "NodeJS", size: 35 },
  { text: "React", size: 34 },
  { text: "AWS", size: 33 },
  { text: "MongoDB", size: 32 },
  { text: "Azure", size: 31 },
  { text: "heroku", size: 29 },
  { text: "VIPER", size: 27 },
  { text: "Travel", size: 25 },
  { text: "CI/CD", size: 23 },
  { text: "React Native", size: 19 },
  { text: "Xamarin", size: 17 },
  { text: "Flutter", size: 11 },
  { text: "foodie", size: 10 }
];

var words = skills.map(function(s) {
  return { text: s.text, weight: s.size };
});

$(function() {
  $("#my-skills").jQCloud(words, {
    shape: "rectangular",
    autoResize: true,
    colors: [
      "#ffffcc",
      "#fec976",
      "#fcdda0",
      "#feb24c",
      "#fc8d3c",
      "#fa4e2a",
      "#ecdcaa",
      "#de2351",
      "#bb3243",
      "#9f9933"
    ],
    delay: 5
  });
});
