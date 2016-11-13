import identity from "../identity";
import stream from "../stream";
import pathArea from "./area";
import pathBounds from "./bounds";
import pathCentroid from "./centroid";
import PathContext from "./context";
import PathString from "./string";

export default function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      stream(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    stream(object, projectionStream(pathArea));
    return pathArea.result();
  };

  path.bounds = function(object) {
    stream(object, projectionStream(pathBounds));
    return pathBounds.result();
  };

  path.centroid = function(object) {
    stream(object, projectionStream(pathCentroid));
    return pathCentroid.result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = (projection = _) == null ? identity : _.stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = (context = _) == null ? new PathString : new PathContext(_);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
}
