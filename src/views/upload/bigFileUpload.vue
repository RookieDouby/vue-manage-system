<template>
    <div>
        <input type="file" @change="handleFileChange" />
        <el-button @click="handleUpload">上传</el-button>
    </div>
</template>
<script>
const LENGTH = 10;

export default {
    data() {
        return {
            container: {
                file: null,
            }
        }
    },
    methods: {
        handleFileChange(e) {
            const [file] = e.target.files;
            if (!file) return;
            Object.assign(this.$data, this.$options.data())
            this.container.file = file;
        },
        createFileChunk(file, length = LENGTH) {
            const fileChunkList = [];
            const chunkSize = Math.ceil(file.size / length); // 每一文件块的大小
            let curWholeSize = 0; // 当前总计文件大小
            while(curWholeSize < file.size) {
                fileChunkList.push({ file: file.slice(curWholeSize, curWholeSize + chunkSize) });
                curWholeSize += curWholeSize
            }
            return fileChunkList;
        },
        async handleUpload() {
            if (!this.container.file) return;
            const fileChunkList = this.createFileChunk(this.container.file);
        },
    }
}
</script>