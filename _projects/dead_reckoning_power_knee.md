---
layout: page
title: dead reckoning on the Össur Power Knee
description: using pedestrian dead reckoning for task and terrain estimation on the Össur Power Knee
category: classes
img: /assets/img/projects/dead_reckoning_power_knee/angular_velocity.png
---

<div class='row'>
    <div class="col-sm-8 mt-3 mt-md-0">
        <h3>towards pedestrian dead reckoning and incline estimation on the Össur Power Knee</h3>
        <p><strong>class:</strong> <a href="https://atlas.ai.umich.edu/courses/IOE435/2520/">Quantifying Human Motion Through Wearable Sensors</a><br>
        <strong>term:</strong> winter 2025 <br>
        <strong>write up: </strong> forthcoming following publication</p>
        <hr>
        <p>
        This study explores the feasibility of using the limited sensor suite of the
        Ossur Power Knee to estimate gait speed
        and incline in a pilot study. We use a Kalman filter approach
        for fusing accelerometer and gyroscope signals from the shank-
        mounted inertial measurement unit (IMU) to estimate sensor
        orientation and transform IMU accelerations into the global
        frame. Stride segmentation is performed using thresholds on
        Power Knee’s strain gauge signals to identify gait events. We then
        utilize pedestrian dead reckoning techniques to estimate shank
        position over time. We remove gravity from the global frame
        acceleration, use trapezoid integration to estimate velocity and
        position, and apply zero-velocity updates per stride to minimize
        drift. From the reconstructed motion, we derive estimates of
        walking speed and terrain slope. Although this work is limited to
        a single participant and short walking bouts, preliminary results
        suggest that meaningful task-level insights can be estimated even
        with the limited sensor suite on the Power Knee.
        </p>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/dead_reckoning_power_knee/angular_velocity.png" title="cad" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Global frame accelerations and angular velocities for
            trial on level ground at 1 m/s
        </div>      
    </div>
</div>