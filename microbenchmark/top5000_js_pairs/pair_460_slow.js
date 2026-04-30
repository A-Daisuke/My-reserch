const Benchmark = {
    run: function() {
        var VAR_1 = "This is a verrrry verrrry long something... a test string";
        var VAR_2 = /test string/g;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.match(new RegExp("test string", "g"));
          VAR_1.match(new RegExp("test string", "g"));
          VAR_1.match(new RegExp("test string", "g"));
          VAR_1.match(new RegExp("test string", "g"));
        }
    }
};