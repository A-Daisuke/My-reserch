const Benchmark = {
    run: function() {
        var VAR_1 = "",
          VAR_2 = 1000;
        while (VAR_2--) {
          VAR_1 += "<div>\n";
          VAR_1 += "  <p>hello</p>\n";
          VAR_1 += "  <p>hi 2</p>\n";
          VAR_1 += "  <p>hhsdad</p>\n";
          VAR_1 += "<div>";
        }
        var VAR_3 = VAR_1;
    }
};