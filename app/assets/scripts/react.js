import React from 'react';
import ReactDom from 'react-dom';

const Skills = (props) => {
	const currentSkills = [
		{id:1, icon:'assets/images/icons/html5-569_640.png', title: 'HTML5', desc: 'I am using semantic HTML5, which clearly shows and describes the meaning for browsers and developers. It is important for Search Engine Optimization as well.'},
		{id:2, icon:'assets/images/icons/css3-1841590_640.png', title: 'CSS3', desc: 'Following CSS3 standards, BEM methodology and using SASS, PostCSS, Flexbox, Media Queries, so I can write efficient, reusable, cross-browser compatible style.'},
		{id:3, icon:'assets/images/icons/js.png', title: 'Javascript', desc: 'Following ES6, my approach is Object Orientated. I am using the module pattern with JQuery library and have a knowledge of AJAX as well.'},
		{id:4, icon:'assets/images/icons/react.png', title: 'React', desc: 'I have a solid basic understanding of React library and started using in my projects as well.'},
		{id:5, icon:'assets/images/icons/Git.png', title: 'Git', desc: 'As it is important to manage a project, tracking changes, version controll system is essential. I am using GIT with terminal in my projects and storing the code on GitHub repositories.'},
		{id:6, icon:'assets/images/icons/npm.png', title: 'NPM', desc: 'A great way of installing and managing libraries, dependencies and packages. Makes the development workflow faster and more organized.'},
		{id:7, icon:'assets/images/icons/gulp-logo.png', title: 'Gulp', desc: 'Enhance the development process by automating time-consuming tasks. I am using it for syncronising the browser and changes in html, css and js files and minifying files, compressing images.'},
		{id:8, icon:'assets/images/icons/webpack.png', title: 'Webpack', desc: 'Webpack is used to compile JavaScript modules. A module bundler, I am able to develop modules separetely in multiple files.'},
		{id:9, icon:'assets/images/icons/php-logo-800x445.png', title: 'PHP', desc: 'I have a strong basic understanding of this server-side language. Using PHP for form processing.'},
		{id:9, icon:'assets/images/icons/wordpress-1810632_640.jpg', title: 'Wordpress', desc: 'I am able to make websites with wordpress, creating and customizing responsive themes as well.'},
	];
	return (
		<div>
			{
		currentSkills.map((skillItem) => ( 
			 <Skill key={skillItem.id}
							title={skillItem.title}
							desc={skillItem.desc}
							icon={skillItem.icon} />
		))
			}
		</div>
	);
}

const Skill = (props) => {
	return (
	<div className="skills__item">
		<img className="lazyload" src={props.icon} alt={props.title} />
				<h3 className="skills__head">{props.title}</h3>
				<p className="skills__desc">{props.desc}
				</p>
	</div>
		
	);
}

ReactDom.render(
	<Skills />,
  document.getElementById('toSkills')
);