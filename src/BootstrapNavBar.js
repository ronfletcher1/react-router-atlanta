import React, {Component} from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'
// import Home from './Home';
// import MayorMsg from './MayorMsg';
// import Photos from './Photos';
// import Weather from './Weather';
// import About from './About';

class BootstrapNavBar extends Component{
	constructor(){
		super();
		this.state = {
			activeLink: ""
		}
	}

	setActiveLink(linkRoute){
		this.setState({
			activeLink: linkRoute
		})
	}
  render(){
    return(

				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">Welcome To Atlanta</a>
						</div>
						<ul className="nav navbar-nav">
		    		<li><Link to="/">Home</Link></li>
						<li><Link onClick={()=>{this.setActiveLink('/localweather')}} to="/localweather">
							<span className={this.state.activeLink=='/localweather' ? 'active' : ""}>Weather</span></Link></li>
		      	<li><Link onClick={()=>{this.setActiveLink('/mayormsg')}} to="/mayormsg">Mayor Message</Link></li>
		      	<li><Link onClick={()=>{this.setActiveLink('/photos')}} to="/photos">Images</Link></li>
		      	<li><Link onClick={()=>{this.setActiveLink('/about')}} to="/about">About</Link></li>
		    </ul>
		  </div>
		</nav>    
	)
  }
}

export default BootstrapNavBar
						{/* <ul className="nav navbar-nav">
								<Link to= "/">Home</Link>
								<Link to= "/localweather">Local Weather</Link><br></br>
								<Link to= "/about">About</Link>
								<Link to= "/mayormessage">Message from the Mayor</Link>
								<Link to= "/takealook">Atlanta Photo's</Link>
						</ul>
								<Route path="/about" component={About} />;
								<Route path="/localweather" component={Weather} />
					</div>
				</nav>  

			</Router>  
	)
  }
}

export default BootstrapNavBar */}