import {
    CurveFactory,
    curveLinear,
    curveLinearClosed,
    curveMonotoneX,
    curveMonotoneY,
    curveNatural,
    curveStep,
    curveStepAfter,
    curveStepBefore,
} from 'd3';

class Interpolation {

    public static CURVE_LINEAR = curveLinear;
    public static CURVE_LINEAR_CLOSED = curveLinearClosed;
    public static CURVE_MONOTONE_X = curveMonotoneX;
    public static CURVE_MONOTONE_Y = curveMonotoneY;
    public static CURVE_NATURAL = curveNatural;
    public static CURVE_STEP = curveStep;
    public static CURVE_STEP_AFTER = curveStepAfter;
    public static CURVE_STEP_BEFORE = curveStepBefore;

    // public create(): CurveFactory {
    //    return curveStepBefore;
    // }
};

export default Interpolation;