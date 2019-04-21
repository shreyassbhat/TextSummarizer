import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

    constructor(props) {
        super(props);
      
        this.state = {
            forecasts: [],
            Data: '',
            fulltext: '',
            num: ''


        };
        this.updateState = this.updateState.bind(this);
        this.onSubmitt = this.onSubmitt.bind(this);
        this.numbersub = this.numbersub.bind(this);
    }
    updateState(e) {
        this.setState({ fulltext: e.target.value });
        console.log(this.state.fulltext);
    }
    numbersub(e) {
        this.setState({ num: e.target.value });
        console.log(this.state.num);
    }
      
    onSubmitt() {
        console.log(this.state.fulltext, this.state.num);

      fetch('http://localhost:3400/summarizer/summary', {

          method: 'POST',
          body: JSON.stringify({
              url: this.state.fulltext,
              num: this.state.num
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
     .then(response =>
          response.json().then(data => ({
              data: data,
              status: response.status
          })
          ).then(res => {
              console.log(res.data);
              this.setState({ Data: res.data })
              console.log(this.state.Data);
          }));
  }

  
 
   
  

  render() {
    

    return (
        <div className="form-group">
            
            <h1>TEXT SUMMARIZER</h1>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                        <i className="fas fa-pencil-alt prefix"></i>
                    </span>
                </div>
            <textarea className="form-control" id="noter-text-area" name="fulltext" value={this.state.fulltext} cols={60} rows={10} onChange={this.updateState} />
            </div>
            <span></span>
            <div className="input-group">
                <input id="num" type="numbers" className="form-control" name="num" value={this.state.num} placeholder="select from 1-10" max="10" onChange={this.numbersub} />
            </div>
           
                <button style={{ backgroundColor: '#d35400' }} onClick={this.onSubmitt} >SUBMIT</button>
            

            <p>SUMMARY HERE.</p>
            <textarea id="noter-text-area" name="textarea" value={this.state.Data} cols={60} rows={10}/>
            
      </div>
    );
  }
}
