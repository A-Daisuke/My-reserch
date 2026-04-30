const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1024).join("hello!\n");
        VAR_1.split("\n").length + 1;
    }
};