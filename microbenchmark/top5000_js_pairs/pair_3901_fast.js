const Benchmark = {
    run: function() {
        var VAR_2 =
          "/my/super/long/path/which/is/reallyyyyyy/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/long/myFileNameWithExt.jpg/you-wish/blah/myFileNameWithExt.jpg";
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          var VAR_4 = VAR_2.split(".").pop();
        }
    }
};