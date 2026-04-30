const Benchmark = {
    run: function() {
        var VAR_1 = "var a = { b : 'Hello' }; a.b + ', ' + name;";
        var VAR_4 = new Function("name", VAR_1);
        VAR_4("World");
    }
};