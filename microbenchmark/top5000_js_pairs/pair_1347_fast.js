const Benchmark = {
    run: function() {
        var VAR_1 = /\btest\b/g;
        var VAR_2 = new Array(10000).join(" test testing osijdfoisjfiojsfiojsf");
        var VAR_3 = "glue";
        VAR_2.replace(VAR_1, "glue");
    }
};