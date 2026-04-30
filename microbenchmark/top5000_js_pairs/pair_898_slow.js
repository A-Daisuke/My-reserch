const Benchmark = {
    run: function() {
        var VAR_1 = "this is a test string";
        var VAR_2;
        for (VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
          new RegExp("/a/").test(VAR_1);
        }
    }
};