const Benchmark = {
    run: function() {
        eval("var sum = function(a,b){return a+b;}; sum(1,Math.random());");
    }
};