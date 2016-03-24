// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {

	// start app
    // new Router()

var AppView = React.createClass({

	render: function(){

		return (
			<div className="timeContainer">
			<h1 className="timeTitle">CHRONOS EX MACHINA</h1>
			<TimeZone currentYear="2016"/>
		</div>
	)
	}	
})

var TimeZone = React.createClass({
	render: function(){

		return (
			<div className="timeZone">
				<p>{this.state.year}</p>
			
			<div className="buttons">
				<button onClick={this._goForward} className="Forward">Foward</button>
				<button onClick={this._goBack} className="Back">Back</button>
			</div>
			</div>
		)
	},

	_goForward: function() {
		console.log(this.state.year)
		if(!this.state.ticking) {
			var intoTheFuture = function() {
				this.setState({
					year: this.state.year + 1,
					ticking: true
				})
			}
			var boundIncrementer = intoTheFuture.bind(this)
			this.intervalId = setInterval(boundIncrementer, 50)	
		}

		else {
			clearInterval(this.intervalId)
			this.setState({
				ticking: false
			})
		}
	},

	_goBack: function(){
		console.log(this.state.year)
		if(!this.state.ticking) {
			var intoThePast = function() {
				this.setState({
					year: this.state.year - 1,
					ticking: true
				})
			}
			var boundDecrementer = intoThePast.bind(this)
			this.intervalId = setInterval(boundDecrementer, 50)	
		}

		else {
			clearInterval(this.intervalId)
			this.setState({
				ticking: false
			})
		}
	},

	getInitialState: function() {
		return {
			year: parseInt(this.props.currentYear),
			ticking: false
		}
	}
})

    DOM.render(<AppView />, document.querySelector('.container'))
}

app()
