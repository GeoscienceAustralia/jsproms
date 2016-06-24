/**
 * Created by u15873 on 21/06/2016.
 */

var rdflib = require('rdflib');

// For quick access to those namespaces:
var FOAF = $rdf.Namespace("http://xmlns.com/foaf/0.1/")
var RDF = $rdf.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
var RDFS = $rdf.Namespace("http://www.w3.org/2000/01/rdf-schema#")
var OWL = $rdf.Namespace("http://www.w3.org/2002/07/owl#")
var DC = $rdf.Namespace("http://purl.org/dc/elements/1.1/")
var XSD = $rdf.Namespace("http://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#dt-")

/*
    Make an entity class

 */

function Entity(objectURI, label, description, created, wasAttributedTo, rights, confidentialitySatus, metadataUri, dataUri) {

    this.entityUri = $rdf.sym(objectURI);

    this.Created = created;
    this.WasAttributedTo = wasAttributedTo;
    this.rights = rights;












}