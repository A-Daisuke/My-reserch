const Benchmark = {
    run: function() {
        var VAR_1 = "xsl:text";
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          var VAR_4 = VAR_1.indexOf(":");
          var VAR_5 = VAR_1.substr(VAR_4 + 1);
        }
    }
};