const Benchmark = {
    run: function() {
        var VAR_1 = /\.([a-z0-9A-Z]+)$/;
        var VAR_2 =
          "/my/super/long/path/which/is/reallyyyyyy/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/stupidly/long/myFileNameWithExt.jpg/you-wish/blah/myFileNameWithExt.jpg";
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          for (var VAR_5 = VAR_2.length - 1; VAR_5 > 0; VAR_5--) {
            if (VAR_2[VAR_5] == ".") break;
          }
          var VAR_4 = VAR_2.slice(VAR_5 + 1);
        }
    }
};