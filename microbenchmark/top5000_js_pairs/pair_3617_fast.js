const Benchmark = {
    run: function() {
        var VAR_1 = "",
          VAR_2 = 1000;
        while (VAR_2--) {
          VAR_1 +=
            "<div>\n" +
            "  <p>hello</p>\n" +
            "  <p>hi 2</p>\n" +
            "  <p>hhsdad</p>\n" +
            "<div>";
        }
        var VAR_3 = VAR_1;
    }
};