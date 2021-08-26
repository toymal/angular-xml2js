import { Component } from '@angular/core';
import * as xml2js from 'xml2js';

const xmlString = `
<?xml version="1.0" encoding="UTF-8"?>
<foo:BLA xmlns:foo="about:blank" Version="1.2.3.4">
  <foo:EntryItem>
    <foo:Id>1</foo:Id>
    <foo:Name>One</foo:Name>
  </foo:EntryItem>
</foo:BLA>
`;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  xml: string;

  constructor() {
    const parser = new xml2js.Parser({ strict: false, trim: true });
    parser.parseString(xmlString, (err, result) => {
      this.xml = result;
    });
  }
}
