const Benchmark = {
    run: function() {
        var VAR_3 =
          "We want to replace all instances of 'geoff' in this string with 'REPLACED'. ";
        var VAR_4 = /'/g;
        VAR_3.replace(VAR_4, "''");
    }
};