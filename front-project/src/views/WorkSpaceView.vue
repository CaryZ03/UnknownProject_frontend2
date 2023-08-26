<script>
import Moveable from "vue-moveable";

export default {
    components: { Moveable },
    data() {
        const draggable = true;
        const throttleDrag = 1;
        const edgeDraggable = false;
        const startDragRotate = 0;
        const throttleDragRotate = 0;
        const scalable = true;
        const keepRatio = false;
        const throttleScale = 0;
        const renderDirections = ["nw","n","ne","w","e","sw","s","se"];
        const rotatable = true;
        const throttleRotate = 0;
        const rotationPosition = "top";
        const targetRef = null;
        return {
            draggable,
            throttleDrag,
            edgeDraggable,
            startDragRotate,
            throttleDragRotate,
            scalable,
            keepRatio,
            throttleScale,
            renderDirections,
            rotatable,
            throttleRotate,
            rotationPosition,
            targetRef
        };
    },
    methods: {
        onDrag(e) {
            e.target.style.transform = e.transform;
        },
        onScale(e) {
            e.target.style.transform = e.drag.transform;
        },
        onRotate(e) {
            e.target.style.transform = e.drag.transform;
        }
    },
    mounted() {
        this.targetRef = this.$refs.targetRef;
    }
};
</script>
<template>
    <div class="root">
        <div class="container">
            <div
                class="target"
                ref="targetRef"
                style="transform: translate(0px, 0px) rotate(0deg) scale(1, 1);"
            >Target</div>
            <Moveable
                :target="targetRef"
                :draggable="draggable"
                :throttleDrag="throttleDrag"
                :edgeDraggable="edgeDraggable"
                :startDragRotate="startDragRotate"
                :throttleDragRotate="throttleDragRotate"
                :scalable="scalable"
                :keepRatio="keepRatio"
                :throttleScale="throttleScale"
                :renderDirections="renderDirections"
                :rotatable="rotatable"
                :throttleRotate="throttleRotate"
                :rotationPosition="rotationPosition"
                @drag="onDrag"
                @scale="onScale"
                @rotate="onRotate"/>
        </div>
    </div>
</template>