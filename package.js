// package metadata file for Meteor.js
var packageName = 'rshashkov:angular-meteor-datepicker-moment';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'AngularJS datepicker directives';
var gitLink = 'https://github.com/ruslanchek/angular-meteor-datepicker-moment';
var documentationFile = 'README.md';
var packages = {
	"momentjs:moment": {}
};

// Meta-data
Package.describe({
    name: packageName,
    version: version,
    summary: summary,
    git: gitLink,
	packages: packages,
    documentation: documentationFile
});

Package.onUse(function(api) {
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions
    api.addFiles('src/datepicker-moment.js', where); // Files in use
});
