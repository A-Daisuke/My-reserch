const Benchmark = {
    run: function() {
        var VAR_1 =
          "gehjfwejfjwefhuiwheiufmwjeifjlweiojfnvuihuifghwyegdiowedf[w.efopvmnerj";
        var VAR_4,
          VAR_5 = VAR_1.length,
          VAR_6 = 0;
        for (VAR_4 = 0; VAR_4 < VAR_5; VAR_4++) {
          VAR_1[VAR_4] === "e" && VAR_6++;
        }
        console.log(VAR_6);
    }
};