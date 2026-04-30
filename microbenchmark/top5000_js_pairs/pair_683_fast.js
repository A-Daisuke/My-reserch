const Benchmark = {
    run: function() {
        var VAR_2 = "<div> & & & </div>\n<p>sas  asasa</p>";
        function FUNCTION_1(VAR_3) {
          return (VAR_3 + "")
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        }
        for (var VAR_5 = 10000; VAR_5-- > 0; ) FUNCTION_1(VAR_2);
    }
};