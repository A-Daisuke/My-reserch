const Benchmark = {
    run: function() {
        var VAR_1 = "This is a verrrry verrrry long something... a test string";
        var VAR_2 = new RegExp("test string", "g");
        var VAR_3 = /test string/g;
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1.match(/test string/g);
          VAR_1.match(/test string/g);
          VAR_1.match(/test string/g);
          VAR_1.match(/test string/g);
        }
    }
};