const Benchmark = {
    run: function() {
        VAR_9 = 34;
        VAR_10 = 55;
        VAR_11 = 2;
        VAR_12 = 23;
        VAR_18 = (VAR_12 << 18) & (VAR_11 << 12) & (VAR_10 << 6) & VAR_9;
        VAR_19 = VAR_18 >> 18;
        VAR_20 = (VAR_18 >> 12) & 63;
        VAR_21 = (VAR_18 >> 6) & 63;
        VAR_22 = VAR_18 & 63;
    }
};