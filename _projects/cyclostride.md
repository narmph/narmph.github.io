---
layout: page
title: CycloStride
description: design and development of a prosthetic knee optimized for level and ramp walking
category: classes
img: /assets/img/projects/cyclostride/ExplodedView_cropped.png
---

<div class='row'>
    <div class="col-sm-8 mt-3 mt-md-0">
        <h3>a knee designed for sloped walking</h3>
        <p><strong>class:</strong> <a href="https://me.engin.umich.edu/academics/courses/#:~:text=646%20Mechanics%20of%20Human%20Movement">Locomotor Mechanics and Design / Control of Wearable Robotic Systems</a><br>
        <strong>term:</strong> fall 2025 <br>
        <strong>write up: </strong> <a href="{{ '/assets/pdf/MECHENG_646_Project.pdf' | relative_url }}" class="mybtn btn-sm z-depth-0" role="button">PDF</a></p>
        <hr>
        <p>
        Transfemoral amputees exhibit substantial gait deviations during level and inclined walking because passive prosthetic knees cannot generate the positive and negative mechanical work required for normative stance-phase biomechanics. Fully powered knee–ankle systems can address this limitation but introduce mass, electrical, and control complexity that restrict daily usability. This work presents CycloStride, a powered-knee, passive-ankle prosthesis designed to provide functional assistance during both level-ground and ramp locomotion. The knee joint integrates a 1:8 cycloidal transmission driven by a 1:6 Dephy ActPack 4.1 actuator, providing high torque density, low backlash, and compact packaging suitable for portable prosthetic applications. Control is achieved using an ESR-Adapted Hybrid Kinematic–Impedance Controller (HKIC), which modifies kinematic constraints for incline walking to maintain proper foot–ground alignment and adjusts stance-phase impedance surfaces to compensate for the reduced ankle contribution on declines. Motion capture data from prior literature, comprising ten participants across three speeds and five inclines were used to simulate 150 conditions, enabling estimation of required knee torques and motor demands. Results demonstrate that the proposed architecture and control approach can reproduce biomechanically appropriate knee behavior across slopes, supporting the feasibility of a lightweight, hybrid powered-knee, passive-ankle design.
        </p>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="/assets/img/projects/cyclostride/ExplodedView.png" title="explodedview" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Exploded view of the CycloStride transmission assembly. The Dephy ActPack motor serves as the input, driving the eccentric shaft.
        </div>      
    </div>
</div>