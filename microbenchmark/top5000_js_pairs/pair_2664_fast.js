const Benchmark = {
    run: function() {
        var VAR_3 = { KEY_1: "bar" };
        var VAR_1 = new Map();
        VAR_1.set("foo", "bar");
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_3.KEY_1 === "bar";
    }
};