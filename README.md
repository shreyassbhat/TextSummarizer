# TextSummarizer
Web Application for Text Summarization using Lexrank Algorithm 

Using React for Front End and Node server in backend

# lexrank.js

Implements Radev's Lexrank algorithm http://www.jair.org/papers/paper1523.html for unsupervised text summarization in node. Basically applying PageRank to each sentence in a document, finding the most important sentences, and reranking them.

# Quick Start
``` 
var lexrank = require('lexrank');

```
The lexrank provides two functions:

```
lexrank.summarize(text, lineCount, callback)

```

where

text is the original text. There's no need to tokenize the text. Raw text is fine. lexrank.js does a sentence tokenization and then word tokenization.
lineCount is the number of sentences in the output desired.

```
lexrank.summarizePage(url, lineCount, callback)

```

where

url is the URL of the page to summarize. lexrank then uses node-unfluff to extract the text content from the page, then passes it to lexrank.summarize
The other parameters are the same.

# Examples

```
var lexrank = require('lexrank');
var originalText = 'some...text...here...';
var topLines = lexrank.summarize(originalText, 5, function (err, toplines, text) {
  if (err) {
    console.log(err);
  }
  console.log(toplines);
// [{
//   weight: 0.16398118821187135,
//   text: 'The intention of all these rules is to prevent a repeat of the bankruptcies and bail-outs of 2008.',
//   index: 3
// }, {
//   weight: 0.1603637724075845,
//   text: 'By throttling the bits of banks that “make markets” in bonds, shares, currencies and commodities, the theory goes, watchdogs have made such assets less liquid.',
//   index: 5
// }, {
//   weight: 0.1670898954042791,
//   text: 'Meanwhile, the value of outstanding bonds has swollen to record levels, most of them in the hands of asset managers (see chart).',
//   index: 12
// }, {
//   weight: 0.17266004699219448,
//   text: 'That is in part a corollary of banks trimming lending, and so pushing borrowers to the bond market instead, and in part a natural response to low interest rates.',
//   index: 13
// }, {
//   weight: 0.16298329363189878,
//   text: 'They also suspect, however, that the high level of liquidity before the crisis was an anomaly that bankers are harping on about in an effort to roll back regulation.',
//   index: 32
// }]

  console.log(text);
// The intention of all these rules is to prevent a repeat of the bankruptcies
// and bail-outs of 2008. By throttling the bits of banks that “make markets” in
// bonds, shares, currencies and commodities, the theory goes, watchdogs have
// made such assets less liquid. Meanwhile, the value of outstanding bonds has
// swollen to record levels, most of them in the hands of asset managers (see
// chart). That is in part a corollary of banks trimming lending, and so pushing
// borrowers to the bond market instead, and in part a natural response to low
// interest rates. They also suspect, however, that the high level of liquidity
// before the crisis was an anomaly that bankers are harping on about in an
// effort to roll back regulation.
});


```
# Node App Creation and Installing required modules

Assuming that you have already installed node, we must first create a package.json file. The npm utility can help you with that. Run this command in your project folder:

```
npm init
```
Installing Express , body-parser, routes,

```
npm install express -save

```
same way install other required modules

# Creating React App in CLI

```
npm init create-react-app your-app-name
```
copy the code from the repository to your project folder and build it..

same has to be followed for the node application as well
