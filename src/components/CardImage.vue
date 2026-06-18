<template>
    <div class="col-md-6 col-lg-4">
<!-- MODALI -->
        <article class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="ratio ratio4x3">
                <div class="d-flex align-items-center justify-content-center p-2">
                    <img v-if="item.photos" :src="item.photos" class="img-fluid mh-100" style="image-rendering: optimizeQuality; object-fit: contain;" :alt="item.title || 'Media photo'">
                </div>
            </div>
            <div class="card-body d-flex flex-column justify-content-between align-items-start p-4 text-start">
                <span :class="item.labelColor" class="badge mb-2 text-capitalize">{{ item.label }}</span>
                <h3 class="h5 fw-bold">{{ item.title || 'Progetto tecnico' }}</h3>
                <p class="text-secondary mb-3">{{ item.desc || 'Anteprima del progetto tecnico.' }}</p>
                <button type="button" class="btn btn-outline-primary text-white px-3 py-2 rounded-1 border-0" data-bs-toggle="modal" data-bs-target="#galleryPreviewModal" @click="$emit('open-preview', item)">
                    Apri anteprima
                </button>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'CardImage',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
}
</script>