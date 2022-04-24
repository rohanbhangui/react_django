import cv2
import numpy as np

# check face slant
def face_slant(left_eye_vals, right_eye_vals, threshold=3):

    # unpack the coordinates
    left_eye_x = left_eye_vals[0]
    left_eye_y = left_eye_vals[1]
    right_eye_x = right_eye_vals[0]
    right_eye_y = right_eye_vals[1]

    # find the slope between these two lines
    abs_slope = np.abs(right_eye_y - left_eye_y) / (right_eye_x - left_eye_x)

    # return if slope is within the threshold
    return abs_slope <= threshold

# check the turning of the face
def check_turn_face(left_eye_coords, nose_coords, right_eye_coords, threshold):

    # find the euclidean distance between the left eye and the nose
    left_eye_nose_dist = np.linalg.norm(left_eye_coords, nose_coords)

    # find the euclidean distance between the right eye and the nose
    right_eye_nose_dist = np.linalg.norm(right_eye_coords, nose_coords)

    # determine if the difference is within a threshold
    return np.abs(left_eye_nose_dist - right_eye_nose_dist) <= threshold

# check depth
def check_depth(bounding_box_confidence, threshold=0.9):

    # return when the bounding box is >= threshold
    return bounding_box_confidence >= threshold