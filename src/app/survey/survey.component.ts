import { Component, OnInit } from '@angular/core';
import * as Survey from '../../../node_modules/survey-angular';


var surveyJSON = {
  triggers: [
      {
          type: "visible",
          name: "type",
          operator: "equal",
          value: "one",
          questions: ["one"]
      }, {
          type: "visible",
          name: "type",
          value: "two",
          questions: ["two"]
      }, {
          type: "visible",
          name: "type",
          value: "three",
          questions: ["three"]
      }, {
          type: "visible",
          name: "type",
          value: "four",
          questions: ["four"]
      }, {
          type: "visible",
          name: "type",
          value: "five",
          questions: ["five"]
      }, {
          type: "visible",
          name: "type",
          value: "six",
          questions: ["six"]
      }, {
          type: "visible",
          name: "type",
          value: "seven",
          questions: ["seven"]
      }, {
          type: "visible",
          name: "type",
          value: "eight",
          questions: ["eight"]
      }, {
          type: "visible",
          name: "type",
          value: "other",
          questions: ["otherType"]
      }
  ],
  questions: [
      {
          type: "radiogroup",
          name: "type",
          isRequired: true,
          colCount: 4,
          hasOther: true,
          title: "Please select the sport cars type.",
          choices: [
              "one",
              "two",
              "three",
              "four",
              "five",
              "six",
              "seven",
              "eight"
          ]
      }, {
          type: "radiogroup",
          name: "one",
          isRequired: true,
          colCount: 4,
          visible: false,
          title: "please select an option",
          hasOther: true,
          choices: ["one", "two", "three", "four", "five"]
      }, {
          type: "radiogroup",
          name: "two",
          isRequired: true,
          colCount: 4,
          visible: false,
          title: "please select an option",
          hasOther: true,
          choices: ["one", "two", "three", "four", "five"]
      }, {
          type: "radiogroup",
          name: "three",
          isRequired: true,
          colCount: 4,
          visible: false,
          title: "please select an option",
          hasOther: true,
          choices: ["one", "two", "three", "four", "five"]
      }, {
          type: "radiogroup",
          name: "four",
          isRequired: true,
          colCount: 4,
          visible: false,
          title: "please select an option",
          hasOther: true,
          choices: ["one", "two", "three", "four", "five"]
      }, {
          type: "radiogroup",
          name: "five",
          isRequired: true,
          colCount: 4,
          visible: false,
          title: "please select an option",
          hasOther: true,
          choices: ["one", "two", "three", "four", "five"]
      }, {
          type: "radiogroup",
          name: "six",
          isRequired: true,
          colCount: 4,
          visible: false,
          title: "please select an option",
          hasOther: true,
          choices: ["one", "two", "three", "four", "five"]
      }, {
          type: "radiogroup",
          name: "seven",
          isRequired: true,
          colCount: 4,
          visible: false,
          title: "please select an option",
          hasOther: true,
          choices: ["one", "two", "three", "four", "five"]
      }, {
          type: "radiogroup",
          name: "eight",
          isRequired: true,
          colCount: 4,
          visible: false,
          title: "please select an option",
          hasOther: true,
          choices: ["one", "two", "three", "four", "five"]
      }, {
          type: "comment",
          name: "otherType",
          title: "Please describe the car.",
          isRequired: true,
          visible: false
      }
  ]
};
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Survey.Survey.cssType = "bootstrap";
    Survey
    .StylesManager
    .applyTheme("red");

    function sendDataToServer(survey) {
      console.log(survey);
      const resultAsString = JSON.stringify(survey.data);
      alert(resultAsString); //send Ajax request to your web server.
    }

    var survey = new Survey.SurveyModel(surveyJSON);
    survey.onComplete.add(sendDataToServer);
    Survey.SurveyNG.render("surveyElement", { model: survey });

    survey.onComplete
      .add(function (result) {
        document
          .querySelector('#surveyResult')
          .innerHTML = "result: " + JSON.stringify(result.data);
    });
  }
}
