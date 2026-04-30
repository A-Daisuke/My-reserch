const Benchmark = {
    run: function() {
        var VAR_4 = 10,
          VAR_5 = 100;
        var VAR_6 = [
          "This is a long string that due to our strict line length limit of",
          VAR_4,
          " characters per line must be wrapped. ",
          VAR_5,
          "% of engineers dislike this rule. The line length limit is for ",
          " style purposes, but we don't want it to have a performance impact.",
          " So the question is how should we do the wrapping?",
        ].join();
    }
};