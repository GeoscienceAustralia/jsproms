/**
 * Created by laura on 19/07/2016.
 */

// import rdflib
var rdflib = require('rdflib');


// For quick access to those namespaces:
var FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
var RDF = $rdf.Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
var RDFS = $rdf.Namespace("http://www.w3.org/2000/01/rdf-schema#");
var OWL = $rdf.Namespace("http://www.w3.org/2002/07/owl#");
var DC = $rdf.Namespace('http://purl.org/dc/elements/1.1/');
var RSS = $rdf.Namespace("http://purl.org/rss/1.0/");
var XSD = $rdf.Namespace("http://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#dt-");

PROV = $rdf.Namespace('http://www.w3.org/ns/prov#');
PROMS = $rdf.Namespace('http://promsns.org/def/proms#');


var ReportingSystem;

ReportingSystem = Class({
    initialize: function (label, uri, comment, name, actedOnBehalfOf) {
        this.label = label;

        if (uri) {
            this.uri = uri;
        }
        else {
            this.uri = 'http://placeholder.org#';
        }

        if (comment) {
            this.comment = comment;
        }

        if (name) this.name = name;

        if (actedOnBehalfOf) {
            this.actedOnBehalfOf = actedOnBehalfOf;
        }



    },


    makeGraph: function () {
        this.g = $rdf.graph();


        this.g.add($rdf.sym(this.uri), RDF.type, OWL.Class);
        this.g.add($rdf.sym(this.uri), RDF.type, PROV.Agent);
        this.g.add($rdf.sym(this.uri), RDF.type, PROMS.ReportingSystem);

        this.g.add($rdf.sym(this.uri), RDFS.label, $rdf.Literal(this.comment, 'en', XSD.string));
        this.g.add($rdf.sym(this.uri), RDFS.comment, $rdf.Literal(this.comment, 'en', XSD.string));


        if (this.actedOnBehalfOf) {
            this.g = this.g + this.actedOnBehalfOf.get_graph();
            this.g.add($rdf.sym(this.uri), PROV.actedOnBehalfOf, $rdf.sym(actedOnBehalfOf.uri))
        }

        if (this.name) {
            self.g.add($rdf.sym(uri), FOAF.name, $rdf.Literal(this.name, 'en', XSD.string));
        }
    },

    get_graph: function() {
        if (!this.g) {
            this.makeGraph();

            return this.g;
        }
    },

    serialize_graph: function() {
        return g.serialize();
    }

});
