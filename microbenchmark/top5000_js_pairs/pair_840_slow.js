const Benchmark = {
    run: function() {
        var VAR_1 = {
          "&": "&amp;",
          '"': "&quot;",
          "'": "&#39;",
          "<": "&lt;",
          ">": "&gt;",
        };
        var VAR_2 = "<div> & & & </div>\n<p>sas  asasa</p>";
        function FUNCTION_1(VAR_3) {
          if (!/[&"'<>]/.test(VAR_3)) {
            return VAR_3;
          }
          return VAR_3.replace(/[&"'<>]/g, function (VAR_4) {
            return VAR_1[VAR_4];
          });
        }
        for (var VAR_5 = 10000; VAR_5-- > 0; ) FUNCTION_1(VAR_2);
    }
};