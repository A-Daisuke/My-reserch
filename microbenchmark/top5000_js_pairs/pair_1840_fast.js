const Benchmark = {
    run: function() {
        var VAR_5 = 10,
          VAR_6 = 100;
        var VAR_7 = [
          "This is a long string that due to our strict line length limit of",
          VAR_5,
          " characters per line must be wrapped. ",
          VAR_6,
          "% of engineers dislike this rule. The line length limit is for ",
          " style purposes, but we don't want it to have a performance impact.",
          " So the question is how should we do the wrapping?",
        ].join();
    }
};