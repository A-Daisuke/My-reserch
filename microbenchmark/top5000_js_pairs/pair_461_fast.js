const Benchmark = {
    run: function() {
        var VAR_1 = "This is a verrrry verrrry long something... a test string";
        var VAR_2 = new RegExp("test string", "g");
        var VAR_4 = /test string/g;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.match(VAR_4);
          VAR_1.match(VAR_4);
          VAR_1.match(VAR_4);
          VAR_1.match(VAR_4);
        }
    }
};