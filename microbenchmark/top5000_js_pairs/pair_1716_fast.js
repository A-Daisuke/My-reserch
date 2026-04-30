const Benchmark = {
    run: function() {
        function FUNCTION_1() {}
        var VAR_2 = new RegExp(
          "(((https?|ftp)://(w{3}\\.)?)(\\w+-?)*\\.([a-z]{2,4}))",
          "gi",
        );
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) FUNCTION_1("a".match(VAR_2));
    }
};