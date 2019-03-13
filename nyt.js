
//$(.toparticles).append(a)

window.onload = function() {

    $("#search").on("click", searchReturn);

};

function searchReturn(){

// console.log($("#searchTerm").attr("data-name",value));
// var keyword = $("#searchTerm").attr("data-name");

// var start_year = $("#startYear").attr("data-name");
// var end_year = $("#endYear").attr("data-name");

var start_year = $("#startYear").val();

console.log(start_year);

var end_year = $("#endYear").val();

console.log(end_year);

var keyword = $("#searchTerm").val();

console.log(keyword);       

// filled-in
if(start_year !=="" && end_year!== ""){

    var search = keyword + "&facet_fields=source&facet=true&begin_date=" + start_year + "0101&end_date=" + end_year + "1231";

// end-date not filled-in
}else if(start_year !=="" && end_year == "" ){

    var search = keyword + "&facet_fields=source&facet=true&begin_date=" + start_year + "0101";

// stat-date not filled-in
}else if(start_year =="" && end_year!== ""){

    var search = keyword + "&facet_fields=source&facet=true&&end_date=" + end_year + "1231";

}else{

    var search = keyword + "&facet_fields=source&facet=true";

};

console.log("the search is: " + search);

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=VURgVKuQgwADx2mopxHCsDdh2gSCcuVs";


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    console.log(response);

    // console.log("there are this many articles: " + response.docs);
    console.log("there are this many articles: " + response.response.docs.length);

    for (i=0;i<response.response.docs.length;i++){

        var resultNum=response.response.docs[i];  
        var author = response.response.docs[i].byline.original;
        var headline = response.response.docs[i].headline;
        var url = response.response.docs[i].web_url;
    
        var results = $("<results>").append("<p>headline</p>");
        $("#articles").append(results);
    };

});

};
