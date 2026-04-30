const Benchmark = {
    run: function() {
        var VAR_1 =
          "gehjfwejfjwefhuiwheiufmwjeifjlweiojfnvuihuifghwyegdiowedf[w.efopvmnerj";
        console.log(
          Array.prototype.reduce.call(
            VAR_1,
            function (VAR_2, VAR_3) {
              return VAR_3 === "e" ? VAR_2 + 1 : VAR_2;
            },
            0,
          ),
        );
    }
};